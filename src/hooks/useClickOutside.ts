import { useEffect } from "react";

export function useClickOutside (
  src: React.RefObject<Node | null>,
  target: React.RefObject<Node | null>,
  active: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (active === false) return;

    function handleClickOutsideMenu (evt: MouseEvent) {
      if (!target.current || !src.current) return;
      if (src.current.contains(evt.target as Node)) return;
      if (target.current.contains(evt.target as Node) === false) onClose();
    }

    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    }
  }, [src.current, target.current, active]);
}
