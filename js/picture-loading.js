const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadButtonElement = document.querySelector(
  '.img-upload__input[type=file]'
);
const pictureContainerElement = document.querySelector(
  '.img-upload__preview img'
);

// uploadButtonElement.addEventListener('change', () => {
//   const file = uploadButtonElement.files[0];
//   const fileName = file.name.toLowerCase();

//   const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

//   if (matches) {
//     pictureContainerElement.src = URL.createObjectURL(file);
//   }
// });

const loadPicture = () => {
  uploadButtonElement.addEventListener('change', () => {
    const file = uploadButtonElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      pictureContainerElement.src = URL.createObjectURL(file);
    }
  });
};

export { loadPicture };
