const rootStyles = window.getComputedStyle(document.documentElement);

if (
  rootStyles.getPropertyValue("--book-cover-width-large") != null &&
  rootStyles.getPropertyValue("--book-cover-width-large") !== ""
) {
  ready();
} else {
  document.getElementById("main-css").addEventListener("load", ready);
}

function ready() {
  const coverWidth = parseFloat(
    rootStyles.getPropertyValue("--book-cover-width-large")
  );
  const coverAr = parseFloat(
    rootStyles.getPropertyValue("--book-cover-width-ar")
  );
  const coverHeight = coverWidth / coverAr;
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
  );

  FilePond.setOptions({
    stylePanelAspectRatio: 1 / coverAr,
    imageResizeTargetWidth: coverWidth,
    imageResizeTargetHeight: coverHeight,
  });

  FilePond.parse(document.body);
}
