var x=0
var fuL=new Date("00:00:00 02/01/2022").getTime()
    setInterval(function (){
        var noW=new Date().getTime()

        var D = fuL-noW

        var ngay=Math.floor(D/(1000*60*60*24))
        var gio=Math.floor(D/(1000*60*60))
        var phut=Math.floor(D/(1000*60))
        var giay=Math.floor(D/(1000))


        if(ngay>0||gio>0||phut>0||giay>0){

            gio%=24
            phut%=60
            giay%=60

            var ngay1=Number.parseInt(ngay/10)
            var ngay2=ngay%10
    
            var gio1=Number.parseInt(gio/10)
            var gio2=gio%10
    
            var phut1=Number.parseInt(phut/10)
            var phut2=phut%10
    
            var giay1=Number.parseInt(giay/10)
            var giay2=giay%10

        document.getElementById("dates1").innerText = ngay1
        document.getElementById("dates2").innerText = ngay2

        document.getElementById("hours1").innerText = gio1
        document.getElementById("hours2").innerText = gio2

        document.getElementById("minutes1").innerText= phut1
        document.getElementById("minutes2").innerText= phut2

        document.getElementById("seconds1").innerText= giay1
        document.getElementById("seconds2").innerText= giay2
         }
        else{
            x++
        if(x%2==0){

        document.getElementById("dates1").innerText = 'H'
        document.getElementById("dates2").innerText = 'A'

        document.getElementById("hours1").innerText = 'P'
        document.getElementById("hours2").innerText = 'P'

        document.getElementById("minutes1").innerText= 'Y'
        document.getElementById("minutes2").innerText= null

        document.getElementById("seconds1").innerText= null
        document.getElementById("seconds2").innerText= null
                }
        else{

        document.getElementById("dates1").innerText = 'N'
        document.getElementById("dates2").innerText = 'E'
            
        document.getElementById("hours1").innerText = 'W'
        document.getElementById("hours2").innerText = null
            
        document.getElementById("minutes1").innerText= 'Y'
        document.getElementById("minutes2").innerText= 'E'
            
        document.getElementById("seconds1").innerText= 'A'
        document.getElementById("seconds2").innerText= 'R'
        
    }

        }                  
    },1000)