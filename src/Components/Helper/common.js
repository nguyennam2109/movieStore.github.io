function generateUniqueId() {
    return Math.floor(new Date().getTime() * Math.random()) + "";
}

function Common() {
    return (
        generateUniqueId()
    );
  }

export default Common;