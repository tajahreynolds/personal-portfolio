export default (props: {children?: any}) => {
  return (
    <html>
      <head>
        <title>Layout</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
};
