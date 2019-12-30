function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}
function Common() {
    return (
        generateUniqueId()
    );
  }

export default Common;