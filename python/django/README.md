Django Tips
===========

- Setting unique=True on a ForeignKey has the same effect as using a OneToOneField.
	HINT: ForeignKey(unique=True) is usually better served by a OneToOneField.
