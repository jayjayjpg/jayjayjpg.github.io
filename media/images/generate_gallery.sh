#!/bin/bash
C=0
printf '' > test.txt
for f in *.jpg;
do
	if [[ $(( C % 3 )) == 0 ]]; then
		printf '</div>\n<div class="row valign-wrapper border-image">\n' >> test.txt
	fi
	printf "<div class=\"col s12 m4\">\n<img class=\"materialboxed responsive-img valign\"
	src=\"/media/images/${f}\">\n</div>\n" >> test.txt
	(( C += 1))
done
printf '</div>\n' >> test.txt