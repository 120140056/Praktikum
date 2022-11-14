<form id="form_mahasiswa">
    <label for="prodi">
        Prodi
    </label>
    <select name="prodi" onchange="showUser(this.value)" id="prodi">
        <option value=""> Pilih program studi </option>
        <option value="IF"> Teknik Informatika </option>
        <option value="EL"> Teknik Elektro </option>
        <option value="ME"> Teknik Mesin </option>
        <option value="TG"> Teknik Geofisika </option>
        <option value="GL"> Teknik Geologi </option>
    </select>
</form>
<div id="tampil_data"><p>Pilih Program Studi Untuk Menampilkan Data Mahasiswa</p></div>
<script src = "https://code.jquery.com/jquery-3.6.1.min.js"
    integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
    crossorigin = "anonymous">
</script>
<script>
    function showUser(str) {
        if (str == "") {
            document.getElementById("tampil_data").innerHTML = "Pilih Program Studi Untuk Menampilkan Data Mahasiswa";
            return;
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("tampil_data").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("GET","tampil.php?q="+str,true);
            xmlhttp.send();
        }
        }
</script>