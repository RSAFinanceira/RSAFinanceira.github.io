class Simulation {
    promoterId = null;
    indicationId = null;
    bind = {
        name: '#name',
        cpf: '#cpf',
        birthData: '#birthDate',
        phone: '#whatsappNumber',
        term: '#term'
    }

    simulation = {
        uuid: null,
        name: null,
        cpf: null,
        birthDate: null,
        phone: null
    }

    minimal = '';
    recaptchaKey = '';

    constructor(promoterId, indicationId) {
        this.promoterId = promoterId;
        this.indicationId = indicationId;

        document.querySelector('#btn-simulation').disabled = true;

        const name = document.querySelector(this.bind.name);
        const cpf = document.querySelector(this.bind.cpf);
        const birthData = document.querySelector(this.bind.birthData);
        const phone = document.querySelector(this.bind.phone);

        name.addEventListener('keyup', this.setName);
        cpf.addEventListener('keyup', this.setCPF);
        birthData.addEventListener('keyup', this.setBirthDate);
        phone.addEventListener('keyup', this.setWhatsappNumber);

        name.addEventListener('change', this.setName);
        cpf.addEventListener('change', this.setCPF);
        birthData.addEventListener('change', this.setBirthDate);
        phone.addEventListener('change', this.setWhatsappNumber);

        name.addEventListener('keyup', this.setName);
        cpf.addEventListener('keyup', this.setCPF);
        birthData.addEventListener('keyup', this.setBirthDate);
        phone.addEventListener('keyup', this.setWhatsappNumber);


        document.querySelector(this.bind.term).addEventListener('change', this.handleChangeTerm);


        document.querySelector('#btn-simulation').addEventListener('click', this.handleSubmit);
    }

    setMinimal = (minimal) => {
        if(minimal === '') return;
        this.minimal = `/${minimal}`
    }

    setRecaptchaKey = (recaptcha) => {
        this.recaptchaKey = recaptcha;
    }

    setName = (ev) => {
        if(ev.target.id !== 'name') return;
        this.simulation.name = ev.target.value;
        this.handleLibertyBtnSimulation();
    }
    setCPF = (ev) => {
        if(ev.target.id !== 'cpf') return;
        this.simulation.cpf = maskCPF(ev.target.value);
        ev.target.value = this.simulation.cpf;



        this.handleLibertyBtnSimulation();
    }

    setBirthDate = (ev) => {
        if(ev.target.id !== 'birthDate') return;
        this.simulation.birthDate = maskDate(ev.target.value);
        ev.target.value = this.simulation.birthDate;
        this.handleLibertyBtnSimulation();
    }
    setWhatsappNumber = (ev) => {
        if(ev.target.id !== 'whatsappNumber') return;
        this.simulation.phone = maskPhone(ev.target.value);
        ev.target.value = this.simulation.phone;
        this.handleLibertyBtnSimulation();
    }

    handleLibertyBtnSimulation = () => {
        const btnSimulation = document.querySelector('#btn-simulation');
        btnSimulation.disabled = true;

        const term = document.querySelector('#term').checked;

        if(this.simulation.name && this.simulation.cpf && this.simulation.phone && this.simulation.birthDate && term === true){
            btnSimulation.disabled = false;
        }
    }

    handleChangeTerm = () => {
        this.handleLibertyBtnSimulation();
    }

    handleSubmit = () => {
        const btnSimulation = document.querySelector('#btn-simulation');
        btnSimulation.disabled = true;

        if(this.simulation.name.split(' ').length <= 1){
            document.querySelector('#btn-simulation').disabled = true;
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Você precisa informar seu nome completo'
            });
            btnSimulation.disabled = false;
            return;
        }

        grecaptcha.execute(this.recaptchaKey).then((token) => {
            Swal.fire({
                title: 'Salvando simulação...',
                text: 'Por favor aguarde',
                allowOutsideClick: false,
                allowEscapeKey: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            this.saveSimulation(token).then((res) => {
                this.simulation.uuid = res.data.uuid;

                if(!this.simulation.uuid){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Ocorreu um erro inesperado`
                    });
                    return;
                }

                if(this.indicationId) {
                    window.location.href = `/page/fgts/simulation/stage-2/${this.simulation.uuid}/indication/${this.indicationId}${this.minimal}`;
                    return;
                }
                window.location.href = `/page/fgts/simulation/stage-2/${this.simulation.uuid}${this.minimal}`;
            })
        });
    }

    saveSimulation = (token) => {
        return api.post(`v2/fgts/simulation/stage1/${this.promoterId}`, {
            ...this.simulation,
            indicationId : this.indicationId,
            token
        })
            .catch((err) => {
                Swal.close();
                const code = err.response ? err.response.data.code : '11111';
                const message = err.response ? err.response.data.message : 'Ocorreu um erro inesperado';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `[${code}] ${message}`
                });
            });
    }
}