interface HeroProps {
  header: string;
}

export default function ({ header }: HeroProps) {
  return (
    <div class="hero">
      <h1>{header}</h1>
    </div>
  );
}
