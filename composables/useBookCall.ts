/**
 * Open/close state for the booking dialog, shared through useState so the
 * dialog can be mounted once in the layout and opened from any button on any
 * page — including the ones inside the footer of a different route.
 */
export function useBookCall() {
  const isOpen = useState<boolean>("book-call-open", () => false);

  return {
    isOpen,
    openBooking: () => {
      isOpen.value = true;
    },
    closeBooking: () => {
      isOpen.value = false;
    },
  };
}
