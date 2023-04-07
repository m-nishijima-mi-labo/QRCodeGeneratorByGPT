document.getElementById('generate-btn').addEventListener('click', generateQRCode);

function generateQRCode() {
  const qrText = document.getElementById('qr-text').value;
  const qrCodePreview = document.getElementById('qr-code-preview');
  const downloadBtn = document.getElementById('download-btn');

  if (qrText) {
    const qrCode = new QRious({
      value: qrText,
      size: 250,
    });

    qrCodePreview.innerHTML = '';
    qrCodePreview.appendChild(qrCode.canvas);

    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = qrCode.canvas.toDataURL();
      link.download = 'QRCode.png';
      link.click();
    });

    downloadBtn.hidden = false;
  } else {
    alert('文字列を入力してください。');
  }
}
