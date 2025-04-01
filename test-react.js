// Este es un archivo de diagnóstico para identificar problemas en la aplicación React
console.log("Verificando posibles errores de JavaScript...");

try {
  const fs = require('fs');
  const path = require('path');
  
  // Funcion para leer y validar archivos CSS
  function checkCSSFile(filePath) {
    console.log(`\nVerificando: ${filePath}`);
    if (!fs.existsSync(filePath)) {
      console.log(`- ERROR: El archivo no existe`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar llaves mal cerradas
    let openBraces = 0;
    let closeBraces = 0;
    
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '{') openBraces++;
      if (content[i] === '}') closeBraces++;
    }
    
    if (openBraces !== closeBraces) {
      console.log(`- ERROR: Desbalance de llaves. Abiertas: ${openBraces}, Cerradas: ${closeBraces}`);
    } else {
      console.log("- Las llaves están balanceadas correctamente");
    }
    
    // Verificar media queries mal formadas
    const mediaQueryRegex = /@media[^{]*\{[^}]*\}/g;
    const mediaQueries = content.match(mediaQueryRegex) || [];
    
    if (mediaQueries.length > 0) {
      console.log(`- Se encontraron ${mediaQueries.length} media queries`);
    } else {
      console.log("- No se encontraron media queries");
    }
  }
  
  // Verificar los archivos principales
  const cssFiles = [
    path.join(__dirname, 'src', 'index.css'),
    path.join(__dirname, 'src', 'App.css'),
    path.join(__dirname, 'src', 'components', 'Sidebar.css'),
    path.join(__dirname, 'src', 'components', 'Dashboard.css')
  ];
  
  cssFiles.forEach(checkCSSFile);
  
  console.log("\nDiagnóstico completado. Si no hay errores reportados, el problema puede estar en el código JavaScript o en la configuración de React.");
  
} catch (error) {
  console.error("Error durante la verificación:", error);
} 