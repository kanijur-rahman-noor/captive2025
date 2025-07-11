
        function form2(){

            var phone = document.getElementById("numb").value;
            var myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Cookie", "COMPASS=spreadsheet_forms=CjIACWuJV6J-YFSjA6RRkvZKP1Mr9GZuqTVpTcPa_DMU3-qVHOBgAy2ThrRZzKdAKO9TUBCTo-O9Bho0AAlriVe5rgqivNDb5CUC54WlIch_aEbJsVVgS99Awf8XWHCDIQ97ufFA3mg5tzRYrHkZyg==; S=spreadsheet_forms=AyjO7ZXLVzrjOLg993Ojwh0bwnwsROQv_u9G3UCW4lE; NID=521=RoC8Rwf6OQ4M7g0oq-q1HyUc7uMSaGXmZ_gU34Ewt9bO52Ujn0gIRzYxpoMdJMr0ng_cRxh-LMq6gcgYu-dxtobsDLEMz5KyVF6VTzjCHSTdPut-OUqoBGlfZM4MV3KhuJK3KvFgl-jSElFT3ZVRGCS-L9d5Kh65IUxStyRQFtZoRf5X2_LsSqi_8CxFoPeWqA");

            var urlencoded = new URLSearchParams();
            urlencoded.append("contact", phone);
            urlencoded.append("location", "I-Block");
            

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch("http://13.232.84.170/reports/connection_data_api", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

        }

        function form() {
            
            var phone = document.getElementById("numb").value;
            var location = "I-Block";  // Replace this with dynamic location if needed
var did = document.getElementById("did").value;
var vid = document.getElementById("vid").value;
var hg = document.getElementById("hg").value;
var uid = document.getElementById("uid").value;
var mac = document.getElementById("mac").value;



var url = `http://13.232.84.170/reports/connection_data_api?phone=${encodeURIComponent(phone)}&location=${encodeURIComponent(location)}&did=${encodeURIComponent(did)}&vid=${encodeURIComponent(vid)}&hg=${encodeURIComponent(hg)}&uid=${encodeURIComponent(uid)}&mac=${encodeURIComponent(mac)}`;
        
            fetch(url, { method: 'GET' })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
        
    