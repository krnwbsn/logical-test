function compareDateGreater(date1, date2) {
  return new Date(date1) > new Date(date2);
}

function sortedPhotosPerCity(arrayPhotos) {
  let isSorted;
  do {
    isSorted = true;
    for (let i = 0; i < arrayPhotos.length - 1; i++) {
      if (compareDateGreater(arrayPhotos[i][2], arrayPhotos[i + 1][2])) {
        let temp = arrayPhotos[i];
        arrayPhotos[i] = arrayPhotos[i + 1];
        arrayPhotos[i + 1] = temp;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return arrayPhotos;
}

function sortedAllPhotosByIndex(arrayPhotosAll) {
  let isSorted;
  do {
    isSorted = true;
    for (let i = 0; i < arrayPhotosAll.length - 1; i++) {
      if (arrayPhotosAll[i][3] > arrayPhotosAll[i + 1][3]) {
        let temp = arrayPhotosAll[i];
        arrayPhotosAll[i] = arrayPhotosAll[i + 1];
        arrayPhotosAll[i + 1] = temp;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return arrayPhotosAll;
}

function giveNameEachPhotoPerCity(arrayPhotos) {
  let numPhotosDigitLength = arrayPhotos.length.toString().length;
  for (let i = 0; i < arrayPhotos.length; i++) {
    let digitCounterPhotos = (i + 1).toString().length;
    let zeroTrailerDigitCounter = "";
    for (let j = 0; j < numPhotosDigitLength - digitCounterPhotos; j++) {
      zeroTrailerDigitCounter += "0";
    }
    let finalDigitCounterPhotos = zeroTrailerDigitCounter + (i + 1).toString();
    let extensionFile = arrayPhotos[i][0].split(".")[1];
    let fileName = `${arrayPhotos[i][1]}${finalDigitCounterPhotos}.${extensionFile}`;
    arrayPhotos[i] = [...arrayPhotos[i], fileName];
  }
  return arrayPhotos;
}

function solution(S) {
  let rawElements = S.split("\n");
  rawElements = rawElements.map((data) => data.split(","));
  rawElements = rawElements.map((data) =>
    data.map((innerData) => innerData.trim())
  );

  let mapCity = {};
  for (let i = 0; i < rawElements.length; i++) {
    mapCity[rawElements[i][1]] = [];
  }
  for (let i = 0; i < rawElements.length; i++) {
    mapCity[rawElements[i][1]].push([...rawElements[i], i]);
  }

  for (let city in mapCity) {
    let listElementsCity = mapCity[city];
    mapCity[city] = sortedPhotosPerCity(listElementsCity);
  }
  for (let city in mapCity) {
    let listElementsCity = mapCity[city];
    mapCity[city] = giveNameEachPhotoPerCity(listElementsCity);
  }

  let finalListPhotos = [];
  for (let city in mapCity) {
    finalListPhotos = finalListPhotos.concat(mapCity[city]);
  }
  finalListPhotos = sortedAllPhotosByIndex(finalListPhotos);
  let listFileNamesResult = [];
  for (let i = 0; i < finalListPhotos.length; i++) {
    listFileNamesResult.push(finalListPhotos[i][4]);
  }

  return listFileNamesResult.join("\n");
}
