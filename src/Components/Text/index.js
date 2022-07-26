function Text({children, fontSize, fontWeight, color, backgroundColor, borderRadius, padding, margin}) {
    return (
      <div style={{fontSize, fontWeight, color, backgroundColor, borderRadius, padding, margin}}>
        {children}
      </div>
    );
  }
  
  export default Text;