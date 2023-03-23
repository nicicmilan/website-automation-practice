const availableTags = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom (UK)", "United States (USA)", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
$(function () {
  const searchField = $("#searchField");
  const searchedList = $("#searchedList");

  searchField.on("input", function () {
    const searchString = $(this).val().toLowerCase();
    const matches = availableTags.filter(tag => tag.toLowerCase().includes(searchString));

    searchedList.empty();
    matches.slice(0, 2).forEach(match => {
      const li = $("<li class='list-items'>").text(match);
      li.on("mousedown", function () {
        searchField.val($(this).text());
        searchedList.hide();
      });
      searchedList.append(li);
    });

    if (matches.length) {
      searchedList.show();
    } else {
      searchedList.hide();
    }
  });

  searchField.on("focusout", function () {
    searchedList.hide();
  });
});
var tooltip = $(".tooltip");
tooltip.hide();

function openNewTab() {
  window.open('https://www.google.com')
}

function openNewWindow() {
  window.open('https://www.youtube.com', "_blank", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes")
}

let price = document.querySelector('table th:nth-child(3)')
let prices = document.querySelectorAll('table tr td:nth-child(3)')
let arr = []
function getPriceValue(priceString) {
  return parseFloat(priceString.replace(/\$/g, '').replace(/,/g, ''));
}
price.addEventListener('click', function () {

  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  var table = document.getElementById("firstTable");
  var rows = table.rows;
  var switching = true;
  var dir = "asc";

  while (switching) {
    switching = false;
    for (var i = 1; i < rows.length - 1; i++) {
      var shouldSwitch = false;
      var x = getPriceValue(rows[i].getElementsByTagName("td")[2].textContent);
      var y = getPriceValue(rows[i + 1].getElementsByTagName("td")[2].textContent);

      if (dir == "asc" && x > y || dir == "desc" && x < y) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
})

function showInputField() {
  let inputField = document.querySelector('#show-hide')
  inputField.setAttribute('style', 'display:block;')
}

function hideInputField() {
  let inputField = document.querySelector('#show-hide')
  inputField.setAttribute('style', 'display:none;')
}

let rangeSlider = document.querySelector('#rangeSlider')
let inputValue = document.querySelector('#sliderValue')
inputValue.value = rangeSlider.value
rangeSlider.oninput = function () {
  inputValue.value = this.value;
}
$("#sliderValue").keypress(function (e) {
  e.preventDefault();
}).keydown(function (e) {
  if (e.keyCode === 8 || e.keyCode === 46) {
    return false;
  }
});

let nameField = document.querySelector('#enterName')

function alertPopUp() {
  alert(`Hello ${nameField.value}, share this practice page and share your knowledge`)
  nameField.value = ''
}

function confirmPopUp() {
  confirm(`Hello ${nameField.value}, are you sure you want to confirm?`)
  nameField.value = ''
}


$(function () {
  var rangeSlider = $("#rangeSlider");
  rangeSlider.on("input", function () {
    var value = $(this).val();
    tooltip.text(value);
    tooltip.show()
    updateTooltipPosition(rangeSlider, tooltip);
  });
  rangeSlider.on('mouseup', function () {
    tooltip.hide()
  });
  rangeSlider.on('mouseover', function () {
    tooltip.show()
  });
  rangeSlider.on('mouseout', function () {
    tooltip.hide()
  })

  rangeSlider.on("mousemove", function () {
    updateTooltipPosition(rangeSlider, tooltip);
  });

  function updateTooltipPosition(slider, tooltip) {
    var thumbWidth = slider.width() * (parseInt(slider.val()) - parseInt(slider.attr("min"))) / (parseInt(slider.attr("max")) - parseInt(slider.attr("min")));
    var thumbLeft = thumbWidth - (tooltip.outerWidth() / 2) + slider.offset().left;
    var thumbTop = slider.offset().top + slider.outerHeight() + 10;
    tooltip.css({ left: thumbLeft, top: thumbTop }).text(slider.val());
  }
});

const shadowElement = document.getElementById('shadow-dom')
const shadowRoot = shadowElement.attachShadow({ mode: "open" })
const shadowInputField = document.createElement('input')
shadowInputField.id = "shadowInputField"
shadowInputField.className = "searchField-style class4"
shadowInputField.placeholder = "Type in Shadow DOM"
shadowRoot.appendChild(shadowInputField)
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";
shadowRoot.appendChild(link);


async function saveFile() {
  let fileUpload = document.getElementById('fileupload')
  let formData = new FormData();
  formData.append("file", fileUpload.files[0])
  if (fileUpload.files[0].type !== 'image/png') {
    alert(`Only supported file for upload is .PNG`)
  } else {
    alert(`You have uploaded ${fileUpload.files[0].name} successfully.`)
  }
}


let fileUpload = document.getElementById('fileupload')
var uploadedImage = ''
fileUpload.addEventListener('change', function () {
  const file = this.files[0];
  const fileType = file.type.split('/')[0];
  if (fileType !== 'image') {
    alert('Please upload an image file.');
    fileUpload.value = '';
    document.querySelector('#displayed-image').style.backgroundImage = ''
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const img = new Image();
    img.src = reader.result;
    img.onload = function () {
      if (this.width > 500 || this.height > 500) {
        alert("The image must be no larger than 500 x 500 pixels.");
        // Reset the file input to clear the selected file
        fileUpload.value = '';
        document.querySelector('#displayed-image').style.backgroundImage = ''
        return;
      }
      else if (this.width < 500 || this.height < 500) {
        // Reset the file input to clear the selected file
        document.querySelector('#displayed-image').style.backgroundPosition = 'center';
        document.querySelector('#displayed-image').style.backgroundRepeat = 'no-repeat';
        document.querySelector('#displayed-image').style.backgroundImage = `url(${uploadedImage})`
      }
      uploadedImage = reader.result;
      document.querySelector('#displayed-image').style.backgroundImage = `url(${uploadedImage})`
    }
  })
  reader.readAsDataURL(file);
})

let mouseHoverBtn = document.querySelector('#hover')
let mouseHoverContent = document.querySelector('.mouse-hover-content')

mouseHoverBtn.addEventListener('mouseenter', function () {
  mouseHoverContent.style.display = 'block'
})

mouseHoverBtn.addEventListener('mouseleave', function () {
  mouseHoverContent.style.display = 'none'
})
mouseHoverContent.addEventListener('mouseenter', function () {
  mouseHoverContent.style.display = 'block'
})

mouseHoverContent.addEventListener('mouseleave', function () {
  mouseHoverContent.style.display = 'none'
})

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function generateId() {
  const timestamp = new Date().getTime().toString(16);
  const random1 = Math.random().toString(16).substr(2, 4);
  const random2 = Math.random().toString(16).substr(2, 4);
  const random3 = Math.random().toString(16).substr(2, 4);
  const random4 = Math.random().toString(16).substr(2, 6);
  return `${timestamp}-${random1}-${random2}-5${random3}-${random4}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const buttonContainer = document.getElementById('button-container');

  function initButtons() {
    const buttons = buttonContainer.querySelectorAll('.button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].id = generateId(); // assign a unique ID to each button
      buttons[i].addEventListener('click', shuffleButtons);
    }
  }

  function shuffleButtons() {
    const buttons = buttonContainer.querySelectorAll('.button');
    for (let i = buttons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempText = buttons[j].textContent;
      const tempId = buttons[j].id;
      buttons[j].textContent = buttons[i].textContent;
      buttons[j].id = buttons[i].id;
      buttons[i].textContent = tempText;
      buttons[i].id = tempId;
      buttonContainer.insertBefore(buttons[j], buttons[i]);
    }
  }

  initButtons();
  const buttons = buttonContainer.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      alert(`you have clicked the ${button.className} element`)
    })
  })
});

const logoutBtn = document.querySelector('.logoutImg')
logoutBtn.addEventListener('click', function () {
  localStorage.removeItem('authenticated');
  window.location.href = 'index.html'
})

const timerButton = document.getElementById('timerButton')
const timerMessage = document.querySelector('.message.box')
const successMsg = document.querySelector('strong')

timerButton.addEventListener('click', function () {
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000
    successMsg.innerHTML = `Success after ${duration} seconds!`
    timerMessage.style.display = 'block'


  }, Math.floor(Math.random() * 5000))
})
$( function() {
  $( ".vertical-list-container" ).sortable();
  $( ".vertical-list-container" ).disableSelection();
} );