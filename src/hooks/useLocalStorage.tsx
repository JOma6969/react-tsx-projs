const useLocalStorage = () => {

  // create a setter function that handles setting the item to localStorage
  const setter = (param: string) => {
    localStorage.setItem("theme", param);
  }

  console.log(localStorage.getItem("theme"))
  
  // return the setter function to be used by the component that needs the hook 
  return setter
}

export default useLocalStorage