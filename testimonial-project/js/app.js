(function(){

    //variables 
    const img = document.querySelector('img');
    const customerName = document.getElementById('customer-name');
    const customerText = document.getElementById('customer-text');
    const buttons = document.querySelectorAll('.btn');

    let i = 0;
    let customersArr = [];

    //creating a cutomer constructor

    function Customer(img,name,text){
        this.img = img;
        this.name = name;
        this.text = text;
    }

    //creating a function to create a new cutomer

    function createCustomer(img,name,text){
        var fullImg = `./img/customer-${img}.jpg` ;
        let customer = new Customer(fullImg,name,text);
        customersArr.push(customer);
    } 

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(1,'Shira','always look on the bright side of life');

    // events

    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            if(button.classList.contains('nextBtn')){
                i++;
                if(i>customersArr.length-1){
                    i=0;
                }
            }else{
                i--;
                if(i<0){
                    i = customersArr.length -1;
                }
            }
            img.src = customersArr[i].img;
            customerName.textContent = customersArr[i].name;
            customerText.textContent = customersArr[i].text;
        })
    })




})();