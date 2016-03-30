function Model3D(geometry, material)
{
	THREE.Mesh.call(this, geometry, material);

	this.name = "model";
}

Model3D.prototype = Object.create(THREE.Mesh.prototype);
Model3D.prototype.icon = "editor/files/icons/models/cube.png";
Model3D.prototype.updateable = true;
Model3D.prototype.update = update;

function update()
{
	for(var i = 0; i < this.children.length; i++)
	{
		if(this.children[i].updateable)
		{
			this.children[i].update();
		}
	}
}