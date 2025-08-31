export default function LoadingScreen() {
  return (
    <div className="loading-screen" data-testid="loading-screen">
      <div className="door-container" id="doorContainer">
        <div className="door-left"></div>
        <div className="door-right"></div>
        <div className="logo-container">
          <div className="logo-text" data-testid="logo-text">BLUEHAWK</div>
          <div className="logo-subtitle" data-testid="logo-subtitle">PREMIUM QUARTZ SOLUTIONS</div>
        </div>
      </div>
    </div>
  );
}
