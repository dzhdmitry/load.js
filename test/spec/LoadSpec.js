describe("Load", function() {
  var flag;

  beforeEach(function() {
    flag = false;
  });

  function flagIsTrue() {
    return flag;
  }

  it("should load sample file", function() {
    runs(function() {
      load('sample.js').thenRun(function() {
        flag = true;
      });
    });

    waitsFor(flagIsTrue, "loaded", 500);

    runs(function() {
      expect(sample).toBeDefined();
      expect(sample).toEqual('sample.js executed');
    });
  });

  it("should load sample file using path", function() {
    runs(function() {
      load('spec/helpers/sample.js').thenRun(function() {
        flag = true;
      });
    });

    waitsFor(flagIsTrue, "loaded", 500);

    runs(function() {
      expect(helpers_sample).toBeDefined();
      expect(helpers_sample).toEqual('helpers/sample.js executed');
    });
  });

  it("should load file with custom attributes", function() {
    runs(function() {
      load({src: 'custom.js', id: 'custom_js'}).thenRun(function() {
        flag = true;
      });
    });

    waitsFor(flagIsTrue, "loaded", 500);

    runs(function() {
      expect(custom_sample).toBeDefined();
      expect(custom_sample).toEqual('custom.js executed');
      expect(document.getElementById('custom_js')).not.toBeNull();
    });
  });
});