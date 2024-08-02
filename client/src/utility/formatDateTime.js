function formatDateTime(isoString) {
    // Create a Date object from the ISO string
    const date = new Date(isoString);
  
    // Format the date part: Aug-24-02
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: '2-digit'
    });
  
    // Format the time part: 04:00 AM
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  
    // Combine the formatted date and time with a space
    return `${formattedDate}  ${formattedTime}`;
  }


export default formatDateTime