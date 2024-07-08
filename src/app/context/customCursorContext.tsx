// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";

// interface CursorPosition {
//   x: number;
//   y: number;
// }

// const defaultCursorPosition: CursorPosition = { x: 0, y: 0 };

// const CustomCursorContext = createContext<CursorPosition>(
//   defaultCursorPosition
// );

// export const useCustomCursor = () => {
//   return useContext(CustomCursorContext);
// };

// interface CustomCursorProviderProps {
//   children: ReactNode;
// }

// export const CustomCursorProvider: React.FC<CustomCursorProviderProps> = ({
//   children,
// }) => {
//   const [cursorPosition, setCursorPosition] = useState<CursorPosition>(
//     defaultCursorPosition
//   );
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const updateCursorPosition = (event: MouseEvent) => {
//       setCursorPosition({ x: event.clientX, y: event.clientY });
//     };

//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkIfMobile();
//     window.addEventListener("mousemove", updateCursorPosition);
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("mousemove", updateCursorPosition);
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   if (isMobile) {
//     return <>{children}</>;
//   }

//   return (
//     <CustomCursorContext.Provider value={cursorPosition}>
//       {children}
//     </CustomCursorContext.Provider>
//   );
// };

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorStyle {
  image: string;
  width: number;
  height: number;
}

interface CustomCursorContextProps {
  cursorPosition: CursorPosition;
  cursorStyle: CursorStyle;
  setCursorStyle: (style: CursorStyle) => void;
}

const defaultCursorPosition: CursorPosition = { x: 0, y: 0 };
const defaultCursorStyle: CursorStyle = { image: "", width: 20, height: 20 };

const CustomCursorContext = createContext<CustomCursorContextProps>({
  cursorPosition: defaultCursorPosition,
  cursorStyle: defaultCursorStyle,
  setCursorStyle: () => {},
});

export const useCustomCursor = () => {
  return useContext(CustomCursorContext);
};

interface CustomCursorProviderProps {
  children: ReactNode;
}

export const CustomCursorProvider: React.FC<CustomCursorProviderProps> = ({
  children,
}) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>(
    defaultCursorPosition
  );
  const [cursorStyle, setCursorStyle] =
    useState<CursorStyle>(defaultCursorStyle);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <CustomCursorContext.Provider
      value={{ cursorPosition, cursorStyle, setCursorStyle }}
    >
      {children}
    </CustomCursorContext.Provider>
  );
};
