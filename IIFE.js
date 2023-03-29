function getData() {
  console.log("@SN normal function");
}
getData();

(function getData() {
  console.log("@SN IIFE function");
})();
