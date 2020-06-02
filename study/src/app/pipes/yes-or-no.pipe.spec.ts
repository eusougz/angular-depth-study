import { YesOrNoPipe } from "./yes-or-no.pipe";
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('YesOrNoPipe', () => {

  describe('Teste isolado', () => {
    const pipe = new YesOrNoPipe();

    it('Deve converter false para "Não"', () => {
      expect(pipe.transform(false)).toBe('Não');
    });

    it('Deve converter true para "Sim"', () => {
      expect(pipe.transform(true)).toBe('Sim');
    });

  });

  describe('Teste comportamental do pipe', () => {

    @Component({
      template: `
        Sim ou não: {{ yesOrNo | yesorno}}
      `
    })
    class TestComponent {
      yesOrNo = false;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ TestComponent, YesOrNoPipe ]
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('Deve converter false para "Não"', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Sim ou não: Não');
    });

    it('Deve converter true para "Sim"', () => {
      component.yesOrNo = true;
      fixture.detectChanges();
      expect(el.textContent).toContain('Sim ou não: Sim');
    });

  });

});
