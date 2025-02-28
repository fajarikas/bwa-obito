function previewImage(event) {
  const input = event.target;
  const preview = document.getElementById("preview");
  const uploadText = document.getElementById("upload-text");
  const deleteBtn = document.getElementById("delete-btn");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
      uploadText.classList.add("hidden");
      deleteBtn.classList.remove("hidden");
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function deleteImage() {
  const preview = document.getElementById("preview");
  const uploadText = document.getElementById("upload-text");
  const fileInput = document.getElementById("file-upload");
  const deleteBtn = document.getElementById("delete-btn");

  fileInput.value = "";
  preview.src = "";
  preview.classList.add("hidden");
  uploadText.classList.remove("hidden");
  deleteBtn.classList.add("hidden");
}
document.querySelectorAll("input").forEach((input) => {
  if (input.value.trim() !== "") {
    input.style.fontWeight = "bold";
  }

  input.addEventListener("input", function () {
    if (this.value.trim() !== "" && this.value) {
      this.style.fontWeight = "bold";
    } else {
      this.style.fontWeight = "normal";
    }
  });
});
