export default function Footer() {
  return (
    <footer>
      <div className='text-center text-sm text-muted-foreground'>
        © {new Date().getFullYear()} NextBase. All rights reserved.
      </div>
    </footer>
  );
}
