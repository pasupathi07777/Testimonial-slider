let left_arrow = document.querySelector(".right-arrow ")
let right_arrow = document.querySelector(".left-arrow ")
let img=document.querySelector(".photo-box img")
let profection=document.querySelector(".profection")
let user_name=document.querySelector(".name")
let para=document.querySelector(".para-about")
let user_index=0



let user_details = [
   
        {
        img: "img/profile-image-1.jpg",
        name: "barath",
        profection: "Ui UX desiner",
        about: "Experience UI/UX designer with a keen eye for aesthetics and a passion for creating intuitive, user-centric digital      into visually appealing and functional designs."
    },
    {
        img: "img/profile-image-2.jpg",
        name: "kisore",
        profection: "Grafic desiner",
        about: "Talented graphic designer with a flair for visually striking and cohesive designs. Proficient in utilizing creative software to bring concepts to life, delivering impactful visual solutions."
    },
    {
        img: "img/profile-image-3.jpg",
        name: "raj",
        profection: "web desiner",
        about: "Talented web designer with a flair for visually striking and cohesive designs. Proficient in utilizing creative software to bring concepts to life, delivering impactful visual solutions."
    }
    ,
    {
        img: "img/profile-image-4.jpg",
        name: "ranka ",
        profection: "web developer",
        about: "Talented web development with a flair for visually striking and cohesive designs. Proficient in utilizing creative software to bring concepts to life, delivering impactful visual solutions."
    }]
    data()
   

    left_arrow.addEventListener("click",()=>{
       user_check=user_index
        user_index=(user_check==0)?user_details.length-1:user_check
        user_index--
        console.log(user_index)
        data()
        
        
    })
    right_arrow.addEventListener("click",()=>{
        
        user_check=user_index+1
        user_index=(user_check>user_details.length-1)?0:user_check
        console.log(user_index)
        data()
    })

   function data(){
    //  user_index=0
    img.src=user_details[user_index].img
    user_name.textContent=user_details[user_index].name
    console.log(user_name.textContent=user_details[user_index].name)
    profection.textContent=user_details[user_index].profection
    para.textContent=user_details[user_index].about


   }



