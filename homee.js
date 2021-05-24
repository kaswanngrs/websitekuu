 function ReadMore(){
		location.href='#'
		}
			function NextPage(){
				var konfirmasi = confirm("Apa kamu yakin ingin meninggalkan situs in dan beralih ke situs lain?");
				if(konfirmasi === true) {
					var win = location.href('http://info.kumpulantugas.epizy.com');
  win.focus();
				}else{
					alert('makasih kakk Karna masih bersama kamii');
				}
				 document.getElementById("hasil").innerHTML = text;
			}
	function SendMail(){
		var win = window.open('mailto:kaswan@gmail.com', '_blank');
  win.focus();
  }
	function WhatsApp(){
		var win = window.open('https://wa.me/6282296483289&text=halo', '_blank');
  win.focus();
  }
	function Login(){
		location.href='login.php'
	function Daftar(){
		location.href='daftar.php'
  }