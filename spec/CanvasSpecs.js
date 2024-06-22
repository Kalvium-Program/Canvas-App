describe("Canvas App", function() {
    // Test Case 1: Check if the SVG is added
    it("should include an SVG element in the #canvas div", function() {
      var canvas = document.getElementById('canvas');
      var svg = canvas.querySelector('svg');
      
      expect(canvas).toBeDefined();
      expect(svg).toBeDefined();
      expect(svg.tagName.toLowerCase()).toBe('svg');
    });
  
    // Test Case 2: Check if coloring buttons are present
    it("should have coloring buttons for the SVG paths", function() {
      var buttonFacePlate = document.getElementById('button-face-plate');
      var buttonHelmet = document.getElementById('button-helmet');
      var buttonEyes = document.getElementById('button-eyes');
      var buttonBackground = document.getElementById('button-background');
  
      expect(buttonFacePlate).toBeDefined();
      expect(buttonHelmet).toBeDefined();
      expect(buttonEyes).toBeDefined();
      expect(buttonBackground).toBeDefined();
    });
  
    // Test Case 3: Check if coloring buttons are styled correctly
    it("should style the coloring buttons correctly", function() {
      var colorButtons = document.querySelectorAll('#color-container input[type="color"]');
      
      colorButtons.forEach(function(button) {
        var buttonStyle = window.getComputedStyle(button);
        expect(buttonStyle.width).toBeTruthy();
        expect(buttonStyle.height).toBeTruthy();
        expect(buttonStyle.borderRadius).toBeTruthy();
      });
    });
  
    // Test Case 4: Check if the selected color is reflected correctly on the SVG
    it("should reflect the selected color on the SVG elements", function() {
      var buttonFacePlate = document.getElementById('button-face-plate');
      var facePlate = document.getElementById('face-plate');
      var buttonHelmet = document.getElementById('button-helmet');
      var helmet = document.getElementById('helmet');
      var buttonEyes = document.getElementById('button-eyes');
      var eyes = document.getElementById('eyes');
      var buttonBackground = document.getElementById('button-background');
      var background = document.getElementById('background');
      
      buttonFacePlate.value = '#ff0000';
      buttonFacePlate.dispatchEvent(new Event('input'));
      expect(facePlate.style.fill).toBe('rgb(255, 0, 0)');
  
      buttonHelmet.value = '#00ff00';
      buttonHelmet.dispatchEvent(new Event('input'));
      expect(helmet.style.fill).toBe('rgb(0, 255, 0)');
  
      buttonEyes.value = '#0000ff';
      buttonEyes.dispatchEvent(new Event('input'));
      expect(eyes.style.fill).toBe('rgb(0, 0, 255)');
  
      buttonBackground.value = '#ffff00';
      buttonBackground.dispatchEvent(new Event('input'));
      expect(background.style.fill).toBe('rgb(255, 255, 0)');
    });
  });
  