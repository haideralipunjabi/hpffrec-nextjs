import { useState, useEffect } from "react";
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export function isInstallable() {
  const [promptTrigger,setPromptTrigger] = useState();
  const handlePrompt = (e) => {
    e.preventDefault();
    setPromptTrigger(e);
  };
  useEffect(()=>{
    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
    };
  })
  return promptTrigger;
}

export function isApple(){
  const [isApple, setIsApple] = useState(false);
  useEffect(() => {
    if (
      ["iPhone", "iPad", "iPod"].includes(navigator.platform) &&
      !navigator.standalone
    ) {
      setIsApple(true);
    }
  },[]);
  return isApple;
}