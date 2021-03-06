describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

   it('debería retornar "KROD PXQGR" para "HOLA MUNDO" con offset 3', () => {
    assert.equal(cipher.encode(3, "HOLA MUNDO"), "KROD PXQGR");
     });
    
   it('debería retornar ",. ()" para ",. ()" con offset 3', () => {
      assert.equal(cipher.encode(3, ",. ()"), ",. ()");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    
    it('debería retornar "hola mundo" para "KROD PXQGR" con offset 3', () =>{
      assert.equal(cipher.decode(3, "KROD PXQGR"),"HOLA MUNDO");
    });

    it('debería retornar ",. ()" para ",. ()" con offset 3', () => {
      assert.equal(cipher.encode(3, ",. ()"), ",. ()");
    });
  });

});

