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

const defaultCursorPosition: CursorPosition = { x: 0, y: 0 };

const CustomCursorContext = createContext<CursorPosition>(
  defaultCursorPosition
);

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

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <CustomCursorContext.Provider value={cursorPosition}>
      {children}
    </CustomCursorContext.Provider>
  );
};
