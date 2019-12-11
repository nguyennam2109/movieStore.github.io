function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function Common() {
    return (
        generateUniqueId()
    );
  }

export default Common;