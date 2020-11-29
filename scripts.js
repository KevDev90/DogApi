function getDogBreedImage() {
    let dogApi = `https://dog.ceo/api/breed/${getInputValue()}/images/random`;
    fetch(dogApi)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'error') {
          alert('Cannot locate dog breed, please try another.');
        }
        else {
          displayResults(responseJson)
        }
      })
      .catch(error => alert('Please try again.'));
  }


  function displayResults(responseJson) {
    let display = `<img src="${responseJson.message}" class="results-img">`; 
    $('.results-img').html(display);
    $('.images').removeClass('hidden');
  }

  function  getInputValue() {
  let inputValue = document.getElementById("dogBreed").value;
  inputValue = inputValue.replace(" ", '-').toLowerCase();
  return inputValue
  }


  function submitBreed() {
    $('.dogSelector').submit( event => {
      event.preventDefault();
      getInputValue();
      getDogBreedImage();
    });
  }

function renderDogApp() {
    submitBreed();
}

  $(renderDogApp());