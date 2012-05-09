$(document).ready(function(){
	$('.item a').click(function(event){
		event.preventDefault();
		var tujuan = $(this).attr('href');
		$.confirm({
			'title'		: 'Konfirmasi',
			'message'	: 'Anda akan membuka halaman baru. <br/>Apakah Anda yakin akan membuka halaman ini pada jendela baru?',
			'buttons'	: {
				'Ya, Saya Yakin!'	: {
					'class'	: 'round-blue',
					'action': function(){
						window.open(tujuan,'_blank');
					}
				},
				'Tidak, Malas Baca'	: {
					'class'	: 'round-blue',
					'action': function(){
						
					}
				}
			}
		});
		
	});
});