function solve() {
  let text = (document.getElementById("text").value).toLowerCase();
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  text = text.split(" ");
  let camelCased = ``

  if (namingConvention === "Camel Case"){
      camelCased += `${text[0]}`;
      for (let i = 1; i < text.length; i++){
          camelCased += text[i].charAt(0).toUpperCase() + text[i].slice(1)
      }
      result.innerHTML = camelCased;
  } else if (namingConvention === "Pascal Case"){
      for (let i = 0; i < text.length; i++){
          camelCased += text[i].charAt(0).toUpperCase() + text[i].slice(1)
      }
      result.innerHTML = camelCased;
  } else{
      result.innerHTML = "Error!";
  }
}

