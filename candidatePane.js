let demoCandidates = [
  {
    photo: 'https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/ODP-1082.jpg',
    name: 'Sarah Bitter (Democrat)',
    office: 'Ohio State Senate to represent District 7',
    comment: 'Sara Bitter is a mother, lawyer and leader in advocacy. She and her husband, Kai, are the parents of two children living with a developmental disability.',
    url: window.location.href.trim(),
  },
  {
    photo: 'https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/Teresa_fedor.jpg',
    name: 'Teresa Fedor (Democrat)',
    office: 'Ohio State Senate to represent District 11',
    comment: 'Teresa Fedor lives in Toledo, Ohio. Fedor served in the U.S. Air Force from 1975 to 1978 and the Ohio Air National Guard from 1980 to 1983. She earned a bachelor\'s degree in education from the University of Toledo in 1983. Fedor\'s career experience includes working as teacher with Toledo Public Schools..',
    url: window.location.href.trim(),
  },
  {
    photo: 'https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/Sharon_Sweda.jpg',
    name: 'Sharon Sweda (Dememocrat)',
    office: 'Ohio State Senate to represent District 13',
    comment: 'Sharon Sweda was born in Lorain, Ohio. Sweda\'s career experience includes owning American Patriot Title Agency.',
    url: window.location.href.trim(),
  },
  {
    photo: 'https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/Nickie_Antonio.jpg',
    name: 'Nickie Antoni (Democrat)',
    office: 'Ohio State Senate to represent District 23',
    comment: 'Nickie Antonio lives in Lakewood, Ohio. She earned a bachelor\'s degree in education from Cleveland State University and a master\'s degree in public administration from Cleveland State University in 1991. Antonio\'s career experience includes working as the president of Star Communications Consulting.',
    url: window.location.href.trim(),
  },
  {
    photo: 'https://s3.amazonaws.com/ballotpedia-api/storage/uploads/thumbs/200/300/crop/best/Adam_VanHo.jpg',
    name: 'Adam VanHo (Democrat)',
    office: 'Ohio State Senate to represent District 237',
    comment: 'Adam Vanho lives in Munroe Falls, Ohio. He graduated from Euclid High School. He earned a degree from Allegheny College and a law degree from Cleveland State University. VanHo\'s career experience includes working with the Ohio Attorney General\'s office and owning VanHo law.',
    url: window.location.href.trim(),
  },
];



function candidatePanel(candidates, selector) {
  if (candidates.length === 0) {
    candidates = demoCandidates;
  }
  for (let i = 0; i < candidates.length; i++) {
    candidatePane(i, candidates[i], selector);
  }
}



function candidatePane(i, candidate, selector) {
  let markup = "" +
    "<div class='candidate'>" +
      "<div class='unfurlable'>" +
        "<span class='unfurlableTopMenu'>" +
          "<img src=" + candidate.photo + " class='photo" + i + "  noStyleWe' />" +
          "<div class='nameBox" + i + "  noStyleWe'>" +
            "<div class='nameField" + i + " '>" + candidate.name + "</div>" +
            "<div class='titleField" + i + " '>" + candidate.office + "</div>" +
          "</div>" +
        "</span>" +
      "</div>" +
      "<div class='furlable'>" +
        "<span class='buttons'>" +
          "<button type='button' class='endorsedButton" + i + " weButton noStyleWe' >Endorsed</button>" +
          // "<button type='button' id='endorsedButton' class='fas fa-check' >Endorsed</button>" +
          "<button type='button' class='opposedButton" + i + " weButton noStyleWe' >Opposed</button>" +
          "<button type='button' class='infoButton" + i + " weButton noStyleWe' >Information</button>" +
        "</span>" +
        "<textarea rows='6' class='commentWe" + i + "' placeholder='url' />" +
        "<input type='text' class='sourceWe" + i + "' placeholder='url' />" +
        "<span class='bottomButton'>" +
          "<button type='button' class='saveButton" + i + " weButton noStyleWe' >Save</button>" +
        "</span>" +
      "</div>" +
    "</div>";
  $(selector).append(markup);
  $('.commentWe' + i).val(candidate.comment);
  $('.sourceWe' + i).val(candidate.url);
}