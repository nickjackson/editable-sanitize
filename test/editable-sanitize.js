var Editable = require('editable')
  , Sanitize = require('editable-sanitize')
  , trigger = require('trigger-event');

function createEditable(inner){
  var el = document.querySelector('.editables')
    , h1 = document.createElement('h1');

  el.innerHTML = '';
  h1.innerHTML = inner || '';
  el.appendChild(h1);
  return h1;
}


describe('editable-sanitize', function(){
  it('should prevent enter', function(done){
    var el = createEditable();
    Editable(el).use(Sanitize());
    
    el.onkeydown = function(e){
      expect(e.defaultPrevented).to.eql(true);
      done();
    }

    trigger(el, 'keydown', {key: 'enter'});
  })
  
  it('should clean correctly', function(done){
    var el = createEditable();
    var edit = Editable(el).use(Sanitize())
    
    edit.html('<div>Hello!</div>')
    
    setTimeout(function(){
      try {
        expect(edit.html()).to.eql('Hello!');
        done();
      } catch (e) {
        done(e);
      }
    }, 0)
  })
})