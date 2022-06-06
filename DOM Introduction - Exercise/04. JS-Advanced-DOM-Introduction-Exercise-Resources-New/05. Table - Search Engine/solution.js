function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = Array.from(document.querySelectorAll("tbody tr"));
      let search = document.getElementById('searchField').value;

      table.forEach((el) =>{
         if (el.textContent.includes(search)){
            el.classList.add("select")
         }else {
            el.classList.remove("select")
         }
      })
   }
}