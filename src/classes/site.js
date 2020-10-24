import { css } from '../utils';

export class Site
{
	constructor (selector)
	{
		this.$el = document.querySelector(selector);
	}
	
	render (model)
	{
		this.$el.innerHTML = '';
		
		model.forEach(block =>
		{
			this.$el.insertAdjacentHTML('beforeend', block.toHTML());
		});
		
		this.bindEvents();
	}
	
	addEvent (elem)
	{
		console.log(elem)
		elem.addEventListener('mouseenter', function(e)
		{
			elem.classList.add('isHover');
		});
		elem.addEventListener('mouseleave', function(e)
		{
			elem.classList.remove('isHover');
		});
	}
	
	bindEvents ()
	{
		const elements = this.$el.querySelectorAll('jsHover');
		console.log(elements)
		if (elements.length)
		{
			elements.forEach(item => this.addEvent.bind(this, item));
		}
	}
}