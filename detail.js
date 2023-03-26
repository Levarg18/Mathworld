content={
    First_year:[
        
        {
            header:"Complex Numbers",
            
        content:`<h1>Introduction</h1>
        <p>We can consider that the real numbers domain (family) is one-dimensional because a real number has only one value at a time.

        Complex numbers are bi-dimensional, they consist of a pair of two real numbers. We take as example the complex number z which is defined by a pair two real numbers a and b.
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
    <mtr>
      <mtd>
        <mi>z</mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>z</mi>
        <mo>&#x2208;<!-- ∈ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mi mathvariant="double-struck">C</mi>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo>&#x2208;<!-- ∈ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mi mathvariant="double-struck">R</mi>
        </mrow>
      </mtd>
    </mtr>
  </mtable>
</math>
       </math>
       </p>
        <p>When we are dealing with complex numbers we are writing them in this form:</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true">
    <mlabeledtr>
      <mtd id="mjx-eqn-1">
        <mtext>(1)</mtext>
      </mtd>
      <mtd>
        <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
          <mtr>
            <mtd>
              <mstyle mathbackground="#FFFF9D">
                <mi>z</mi>
                <mo>=</mo>
                <mi>a</mi>
                <mo>+</mo>
                <mi>b</mi>
                <mo>&#x22C5;<!-- ⋅ --></mo>
                <mi>i</mi>
              </mstyle>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mlabeledtr>
  </mtable>
</math>

<p> A complex number z consists of a <b>real part a< and an imaginary part b </b>. If a is zero then the complex number z becomes purely imaginary, if the imaginary part is zero then the complex number z is purely real (or real number):</p>
<ul>
<li><b>purely imaginary</b>: z = b · i </li>
<li> <b>purely real</b>: z = a</li>
</ul>
<p>Here are some examples of two complex numbers z1 and z2: </p>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
    <mtr>
      <mtd>
        <msub>
          <mi>z</mi>
          <mn>1</mn>
        </msub>
        <mo>=</mo>
        <mn>2</mn>
        <mo>+</mo>
        <mn>1</mn>
        <mo>&#x22C5;<!-- ⋅ --></mo>
        <mi>i</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>z</mi>
          <mn>2</mn>
        </msub>
        <mo>=</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mn>3</mn>
        <mo>&#x22C5;<!-- ⋅ --></mo>
        <mi>i</mi>
      </mtd>
    </mtr>
  </mtable>
</math>
<h1> Operations </h1>
<h4> 1. Addition </h4>
<p>When performing an addition on two complex numbers we add the real part of the first number (a1) with the real part of the second number (a2). We do the same for the imaginary parts, (b1) is added to (b2).</p>

        `
        } ,

        {header:"Partial derivations",
        content:`<h1>Introduction</h1>
        <p>You have studied differentiation earlier and you might be thinking- how Partial Derivatives is different from the regular differentiation? The difference between the two is itself the definition of P.D.(the short form we'll be using for Partial Derivatives).
        In Differentiation, we had two variables where 
         was an independent variable and 
         was dependent on 
        , as shown in the diagram below:</p>
        <img src="https://1.bp.blogspot.com/-eUwiLxbZwJM/XlZ-U1tg5iI/AAAAAAAAAIs/8Tf_zPsDHF0wofwFJSvZ-DScIRZ24iBhQCLcBGAsYHQ/s1600/Differentiation%25281%2529.jpg" alt="PD" width="" height="250" class="center">
        <p> The symbol used to denote partial derivatives is <b>∂</b>. One of the first known uses of this symbol in mathematics is by <b>Marquis de Condorcet</b> from 1770, who used it for partial differences. The modern partial derivative notation was created by Adrien-Marie Legendre (1786), although he later abandoned it; Carl Gustav Jacob Jacobi reintroduced the symbol in 1841.</p>
        <P> Here are some examples: </P>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>a)</mtext>
  <mspace width="10pt"></mspace>
  <mfrac>
    <mi>&#x2202;</mi>
    <mrow>
      <mi>&#x2202;</mi>
      <mi>x</mi>
    </mrow>
  </mfrac>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mn>0</mn>
  <mo>;</mo>
  <mspace width="25pt"></mspace>
  <mfrac>
    <mi>&#x2202;</mi>
    <mrow>
      <mi>&#x2202;</mi>
      <mi>y</mi>
    </mrow>
  </mfrac>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mi>y</mi>
</math>
        `
        } ,

        {header:"linear geometry",
        content:`<h1>aidad</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        `
        } 
    
    ],
    Second_year:[
           
        {header:"linear calculus",
        content:`<h1>aidad</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        `
        } 
   
    ],
    Third_year:[
           
        {header:"linear calculus",
        content:`<h1>aidad</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        `
        } 
   
    ],
    Forth_year:[
           
        {header:"linear calculus",
        content:`<h1>aidad</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        `
        } 
   
    ]
}
let display =[]
if(window.year === 1)
{
display=content.First_year
}
if(window.year === 2)
{
display=content.Second_year
}
if(window.year === 3)
{
display=content.Third_year
}
if(window.year === 4)
{
display=content.Forth_year
}


content_box=document.querySelector(".content");
navx=document.querySelector(".vertical-menu");
vertical_text=""
display.forEach((ev,index)=>{

vertical_text+=`<li id="${index}" class="article" >${ev.header}</li>`
})
navx.innerHTML=vertical_text

aa=document.querySelectorAll(".article")
aa.forEach(ev=>{
    ev.addEventListener("click", render_detail)
})
function render_detail(ev)
{
    content_box.innerHTML = display[ev.target.id].content
}


