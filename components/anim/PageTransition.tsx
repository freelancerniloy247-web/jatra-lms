// PageTransition was disabled for performance — was full-remounting
// every page on navigation via key={pathname}. Kept as a passthrough.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
