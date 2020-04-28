
class KatexModule {
    constructor({ data, api }) {
        this.data = data;
        this.api = api;
        this.wrapper = undefined;
        this.settings = [
            {
                name: 'edit',
                title: 'Edit',
                icon: `<?xml version="1.0" encoding="utf-8"?>
                <svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 128 128">
                  <g>
                    <path id="path1" transform="rotate(0,64,64) translate(41.8394357157426,30) scale(2.12499974668029,2.12499974668029)  " fill="#000000" d="M2.2304602,23.487002C1.978337,23.490303,1.7630529,23.513485,1.5989911,23.538988L1.4379965,29.373991 6.4129706,25.992972C5.1072879,23.831715,3.3229947,23.472697,2.2304602,23.487002z M18.379916,1.949927L5.3379789,22.949967C6.0269709,23.365984,6.7079673,23.98897,7.3169656,24.878987L19.489911,4.6639516C19.486905,4.1769512,19.381909,2.7699359,18.379916,1.949927z M16.702374,1.3837662C15.769423,1.380628,14.951926,1.7921813,14.678929,1.9489199L2.1019945,22.129957C2.7779863,22.107985,3.6659825,22.191969,4.5969777,22.580979L17.657918,1.549932C17.337168,1.4319358,17.013356,1.3848127,16.702374,1.3837662z M16.652148,0.00028224519C17.25849,-0.0065505984 17.913571,0.10981163 18.56691,0.44394252 21.056904,1.7199459 20.858906,4.780926 20.849904,4.9109309L20.787907,5.1549499 8.074965,26.196982 7.9989615,26.322989 7.747963,26.736992 0,32.000002 0.26299906,22.499985 13.800935,0.88794375C13.871372,0.83977539,15.102607,0.017743792,16.652148,0.00028224519z" />
                  </g>
                </svg>`
            }
        ];
    }

    static get toolbox() {
        return {
            title: 'KaTeX',
            icon: '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 128 128"><g><path id="path1" transform="rotate(0,64,64) translate(38.4394383430481,30) scale(2.125,2.125)  " fill="#FF5063F1" d="M1.8829951,0L21.440972,0 22.872979,0 22.872979,8.2990112 21.440972,8.2990112 21.440972,4.6640015 4.9149769,4.6640015 11.456967,14.273987 12.768001,16.198975 4.0129994,27.335999 22.10595,27.335999 22.62597,23.700989 24.057,23.700989 22.872979,32 21.440972,32 0,32 0,29.377991 9.2149628,17.577026 1.8829951,6.7720337 1.8829951,4.6640015 1.8829951,2.5230103z" /></g></svg>'
        };
    }

    renderSettings() {
        const wrapper = document.createElement('div');
        let ctx = this;

        this.settings.forEach(tune => {
            let button = document.createElement('div');

            // button.classList.add('cdx-settings-button');
            // button.classList.toggle('cdx-settings-button--active', this.data[tune.name]);
            button.classList.add(this.api.styles.settingsButton);
            button.classList.toggle(this.api.styles.settingsButtonActive, this.data[tune.name]);

            button.innerHTML = tune.icon;
            button.setAttribute("title", tune.title);
            wrapper.appendChild(button);

            button.addEventListener('click', () => {
                if(tune.name === "edit"){
                    ctx._renderEdit(ctx.data.id, ctx.data.text);
                }
            });
        });

        return wrapper;
    }

    _renderEdit(id, text){
        this.wrapper.innerHTML = ''; // clear

        let ctx = this;

        const inputId = "input_" + id;
        const inputDataText = document.createElement('textarea');
        inputDataText.setAttribute("id", inputId);
        inputDataText.setAttribute("data-role", "textarea")
        inputDataText.classList.add('w-100');
        inputDataText.placeholder = 'KaTeX text...';
        inputDataText.value = text ? text : "";

        // inputDataText.addEventListener('paste', (event) => {
        //     ctx.data.text = event.clipboardData.getData('text');
        // });

        this.wrapper.appendChild(inputDataText);

        // ok button
        const spanCheckmark = document.createElement('span');
        spanCheckmark.className = "mif-checkmark";
        
        const okButton = document.createElement('button');
        okButton.className = "button info cycle outline text-center";
        okButton.appendChild(spanCheckmark);
        okButton.addEventListener('click', (event) => {
            //let tt = document.getElementById(inputId);
            ctx.data.text = inputDataText.value;
            //console.log(ctx.data);
            //this.data.dataUri = inputDataUrl.value;
            //ctx._renderKatex();
        });

        this.wrapper.appendChild(okButton);
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('katex-module');

        if (this.data && this.data.text) {
            console.log("should render");
            this._renderKatex(this.data.id, this.data.text);
            return this.wrapper;
        }

        let id = this._generateId();
        this.data.id = id;

        this._renderEdit(id, "");

        return this.wrapper;
    }

    // _toggleTune(tune) {
    //     this.data[tune] = !this.data[tune];
    //     this._acceptTuneView();
    // }

    // _acceptTuneView() {
    //     this.settings.forEach(tune => {
    //         this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);
    //         if (tune.name === 'stretched') {
    //             this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
    //             this._tryRefreshCyAfterResize();
    //         }
    //     });
    // }


    _generateId(){
        let now = new Date();
        let hash = _.plainUUID(now.toUTCString());
        return hash;
    }

    _updateHtml(divId, html) {
        // core
        let divContainer = document.getElementById(divId);
        if(!divContainer) {
            divContainer = document.createElement('div');
            divContainer.setAttribute("id", divId);
            divContainer.setAttribute("style", "min-height: 50px; min-width: 500px;");
            divContainer.className = 'w-100 h-100 text-center';
        }
        divContainer.innerHTML = html;

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(divContainer);
    }

    _renderKatex(id, text) {
        if (!text) {
            return;
        }

        // if(!id){
        //     id = this._generateId();
        // }
        var divKatexId = "divKatex_" + id;
        let renderedHTML;

        try {
            if (!katex) {
                throw new Error('katex dependency required');
            }
            let options_katex = {
                throwOnError: false
            };
            renderedHTML = katex.renderToString(text, options_katex);
        } catch (err) {
            renderedHTML = `Error occurred on process katex: ${err.message}`;
        }

        this._updateHtml(divKatexId, renderedHTML);
    }

    save(blockContent) {
        let id = this.data.id;
        let text = this.data.text;

        this._renderKatex(id, text);

        return Object.assign(this.data, {
            id: id,
            text: text
        });
    }

    validate(savedData) {
        if (!savedData.text || !savedData.text.trim()) {
            return false;
        }
        return true;
    }

}