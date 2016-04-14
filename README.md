# bharath90:meteorgeo
A  meteor package to download SRA database record from [NCBI] National Centre for Biotechnology Information.
##### Client side ONLY
Built over the [NCBI's E-Util API] 
### Version
0.0.2

### Installation
```sh
meteor add bharath90:meteorgeo
```
### Usage
To access the information of experiments with respect to an example SRP accession number SRP034076:

```sh
sra('SRP034076').then (function(d){
    	console.log(d.Record);
    	console.log(d.SRAid);
    });
    //instead of SRP number any accession number like SRA, SRP, GSE*, GSM* accession number can also be used.
    //'Record' is in JSON format with number of experiments related to that particular SRP number
    //'SRAid' is the record id; it is not the accession number
```

### Acknowledgment
[Dr. Artem Barski] -The Barski Laboratory, Cincinnati Children's Hospital, Cincinnati, OH 45229.

[Mr. Andrey Kartoshav] - The Barski Laboratory, Cincinnati Children's Hospital, Cincinnati, OH 45229.





    
   [NCBI]: <http://www.ncbi.nlm.nih.gov/>
   [NCBI's E-Util API]: <http://www.ncbi.nlm.nih.gov/books/NBK25500/>
   [Dr. Artem Barski]: <http://www.cincinnatichildrens.org/research/divisions/a/allergy-immunology/labs/barski/default/>
   [Mr. Andrey Kartoshav]: <http://www.cincinnatichildrens.org/research/divisions/a/allergy-immunology/labs/barski/members/>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>

