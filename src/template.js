class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const componentStyle = `<style>
        .card{
            display: flex;
            flex-basis: 25%;
            justify-content: center;
            margin-bottom: 41px;
        }
        .card-container{
            box-shadow: 0px 24.3973px 42.6953px rgb(232 229 255 / 60%);
            border-radius: 7.84199px;
        }
        .img-container{
            background: linear-gradient(
                242.84deg, #292357 1.64%, #39317C 92.8%);
            mix-blend-mode: screen;
            border-radius: 7.84199px 7.84199px 0px 0px;
        }
        .img-container img{
            border-radius: 7.84199px 7.84199px 0px 0px;
        }
        .title{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 19.1693px;
            line-height: 100%;
            color: #1A1636;
        }
        .title-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .title-container p{
            margin:0;
        }
        .heart-button{
            display: flex;
            align-items: center;            
        }
        .heart-button img{
            width:23px;
        }
        .location{
            display: flex;
            margin-top: 9px;
        }
        .location p{
            margin:0;
        }
        .location-button img{
            width:10px;
        }
        .location-button p{
            margin:0;
        }
        .location-button{
            padding-left:0;
        }
        .tag{
            margin-right:14px;
            text-transform: lowercase;
            padding: 7px 12px;
        }
        .tag-text{
            margin: 12px 7px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 13.9413px;
            line-height: 100%;
        }
        .tag-container{
            display:flex;
            margin-top: 17px;
        }
        .tag-secondary{
            background: #B1BDFA;
            border-radius: 30.4966px;
        }
        .tag-secondary .tag-text{
            color: #2243F1;
        }
        .tag-primary{
            background: #B1E4FA;
            border-radius: 30.4966px;
        }
        .tag-primary .tag-text{
            color: #0D94CF;
        }
        .tag-info{
            background: #B2FAE5;
            border-radius: 30.4966px;
        }
        .tag-info .tag-text{
            color: #099068
        }
        .btn-link{
            background: transparent;
            border: none;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 15.684px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: #39317C;
            padding: 0;
            margin-top: 33px;
        }
        .btn-link img{
            margin-left: 18px;
            width: 7px;
            height: 10px;
        }
        .card-content{
            padding:17px;
        }
    </style>`
        const componentHtml = `
            <div class="card">
              <div class="card-container">
                <div class="img-container">
                    <img src="../assets/card.png"/>
                </div>
                <div class="card-content">
                    <div class="title-container">
                        <p class="title">Name here</p>
                        <button class="icon-button heart-button">
                            <img src="../assets/heart.png" alt="heart" />
                        </button>
                    </div>
                    <div class="location">
                        <button class="icon-button location-button">
                            <img src="../assets/location.png" alt="heart" />
                        </button>
                        <p>Location</p>
                    </div>
                    <div class="tag-container">
                        <div class=" tag tag-secondary">
                            <span class="tag-text">Tag 1</span>
                        </div>
                        <div class="tag tag-primary">
                            <span class="tag-text">Tag</span>
                        </div>
                        <div class="tag tag-info">
                            <span class="tag-text">Tag 1</span>
                        </div>
                    </div>
                    <div>
                        <button class="btn-link">
                            Button Link <img src="../assets/arrow.png" class="arrow-link"/>
                        </button>
                    </div>
                </div>
              </div>
            </div>
        `
        this.innerHTML = componentStyle;
        for (let x = 0; x < 8; x++) {
            this.innerHTML += componentHtml;
        }
    }
}
customElements.define('card-component', Card);