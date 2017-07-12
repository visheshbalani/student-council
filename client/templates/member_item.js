Template.memberItem.helpers({
 member: function() {
 	return member;
 },
 
 Prez: function() {
 	return this.position === 'General Secretary' && this.active;
 },
 VicePrez: function() {
 	return this.position === 'Vice President' && this.active;
 },
 StudentAffairs: function() {
 	return this.department === 'Student Affairs' && this.title === 'Secretaries' && this.active;
 },
 ExternalAffairs: function() {
 	return this.department === 'External Affairs' && this.title === 'Secretaries' && this.active;
 },
 StudentActivities: function() {
 	return this.department === 'Student Activities' && this.title === 'Secretaries' && this.active;
 },
 Academics: function() {
 	return this.department === 'Academic Affairs' && this.title === 'Secretaries' && this.active;
 }
});