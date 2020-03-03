<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=2.0, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            h1{
                border: 1px;
            }
        </style>
    </head>
    <body>
        <h1>0</h1>
        <input type="text">
        <button>+</button>
    
        <script>
            const calc = {
                addBtn : document.querySelector('button'),
                inputTxt : document.querySelector('input'),
                h1: document.querySelector('h1'),
                total: 0,
                init() {
                    this.addBtn.addEventListener('click', this.add.bind(this));         
                   },
                add() {
                    this.total = this.total+ Number(this.inputTxt.value);
                    console.log(typeof this.total);
    
                    this.h1.textContent = this.total;
    
    
                    this.inputTxt.value = '';
    
                }
            };
            calc.init();
        </script>
    </body>
    </html>
