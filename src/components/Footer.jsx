

const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <div className=" flex items-center justify-center h-8 bg-black text-white fixed left-0 bottom-0 right-0">
        &copy; {year.getFullYear()} User Fake Data | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer