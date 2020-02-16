function changeImage(File){
    const reader = new FileReader();
    reader.onload = event => document.getElementById('image').setAttribute('src', event.target.result);
    reader.readAsDataURL(File);
  }